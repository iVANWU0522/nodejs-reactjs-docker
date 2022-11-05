import { mutate, useSWRConfig } from 'swr';

const useMatchMutate = () => {
    const { cache } = useSWRConfig();
    return (matcher: string) => {
        if (!(cache instanceof Map)) {
            throw new Error('matchMutate requires the cache provider to be a Map instance');
        }

        const keys: string[] = [];

        Array.from(cache.keys()).forEach((key: string) => {
            if (key.match(matcher)) {
                keys.push(key);
            }
        });

        const mutations = keys.map((key) => mutate(key, cache.get(key), true));
        return Promise.all(mutations);
    };
};

export default useMatchMutate;
