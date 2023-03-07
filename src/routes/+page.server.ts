import k8s from '@kubernetes/client-node';

export const actions = {
	default: async () => {
		const kc = new k8s.KubeConfig();

		const { NODE_ENV, PUBLIC_NAMESPACE = 'moreillon', PUBLIC_DEPLOYMENT = 'kong' } = process.env;

		if (NODE_ENV === 'development') {
			const files = import.meta.glob('../../*', { as: 'raw' });
			const kubeconfigFileContent = await files['../../kubeconfig']();
			kc.loadFromString(kubeconfigFileContent);
		} else {
			kc.loadFromCluster();
		}

		const api = kc.makeApiClient(k8s.AppsV1Api);

		const body = {
			spec: {
				template: {
					metadata: {
						annotations: {
							'kubectl.kubernetes.io/restartedAt': new Date().toISOString()
						}
					}
				}
			}
		};

		api.patchNamespacedDeployment(
			PUBLIC_DEPLOYMENT,
			PUBLIC_NAMESPACE,
			body,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			{ headers: { 'content-type': 'application/merge-patch+json' } }
		);

		return {};
	}
};
