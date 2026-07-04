import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
                                                \uf08b sumfetch: summary display
                                                -----------
              y__                               \u2652 ABOUT
              ~R@@@g_                           \uf515 ${config.name}
                ~@@@@@g,                        \uf030 ${config.ps1_hostname}
    yg@@@:       \`4@@@@F                        \uf5e7 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
    \`@@@@_.      ::g@@@                         \ufa9e <u><a href="${config.repo}" target="_blank">Github repo</a></u>
      ~@@@@gy__::y@@@@                          -----------
       \`~@@@@@@@\$@@@@@y                         \u2021 CONTACT
          \`~4@@@@@@@@@@@,                       \u1eef <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
              \`~~4@@@@@@@                       \uf0a2 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                    \`\`~~                    
                                            
                                            
                                            
`;
};

export default sumfetch;
