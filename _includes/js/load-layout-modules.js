import instagram from './instagram';
import latestCommit from './latest-commit';
import latestRepos from './latest-repos';
import navigation from './navigation';
import quotes from './quotes';
import recentlyRead from './recently-read';
import socialProfiles from './social-profiles';
import twitter from './twitter';

const dom = {
  select: document.querySelector.bind(document)
};

const commonModules = [
  'social-profiles'
];

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

export default () => {
  const modules = [
    ...commonModules,
    ...(window.__WWW_LAYOUT_MODULES__ ? window.__WWW_LAYOUT_MODULES__ : [])
  ];

  const args = {dom, jQuery};

  modules.forEach(moduleName => {
    try {
      return registry[moduleName] && registry[moduleName](args);
    } catch (error) {
      console.warn(`Error loading the ${moduleName} module.`, error);
    }
  });
};
