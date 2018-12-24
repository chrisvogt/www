import instagram from './instagram';
import latestCommit from './latest-commit';
import latestRepos from './latest-repos';
import navigation from './navigation';
import quotes from './quotes';
import recentlyRead from './recently-read';
import socialProfiles from './social-profiles';
import twitter from './twitter';

const registry = {
  instagram,
  'latest-commit': latestCommit,
  'latest-repository': latestRepos,
  navigation,
  quotes,
  'recently-read': recentlyRead,
  'social-profiles': socialProfiles,
  twitter
};

// NOTE: the names of modules common to each plan type
const commonModules = [
  'social-profiles',
  'navigation'
];

export default () => {
  const modules = [
    ...commonModules,
    ...(window.__WWW_LAYOUT_MODULES__ ? window.__WWW_LAYOUT_MODULES__ : [])
  ];

  modules.forEach(moduleName => {
    try {
      return registry[moduleName] && registry[moduleName](jQuery);
    } catch (error) {
      console.warn(`Error loading the ${moduleName} module.`, error);
    }
  });
};
