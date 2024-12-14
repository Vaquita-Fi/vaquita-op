import { optimismSepolia, Chain, base } from 'viem/chains';
import { Environment, getCurrentEnvironment } from './environment';

// The list of supported Chains for a given environment
export const SUPPORTED_CHAINS: Record<Environment, [Chain, ...Chain[]]> = {
  [Environment.localhost]: [optimismSepolia],
  [Environment.development]: [optimismSepolia],
  [Environment.staging]: [optimismSepolia],
  [Environment.production]: [optimismSepolia],
};

/**
 * Gets the list of supported chains for a given environment.
 * Defaults to the current environment.
 * @param env
 */
export function getChainsForEnvironment(env?: Environment) {
  if (!env) {
    env = getCurrentEnvironment();
  }
  return SUPPORTED_CHAINS[env];
}

export function getChainById(chainId: string) {
  const chains = getChainsForEnvironment();
  return chains?.find((c: Chain) => c.id === Number(chainId)) ?? null;
}
