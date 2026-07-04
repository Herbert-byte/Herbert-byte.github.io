import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
                                                         sumfetch: summary display
                                                        -----------
                  y__                                    ABOUT
                  ~R@@@g_                                ${config.name}
                    ~@@@@@g,                            ﰩ ${config.ps1_hostname}
        yg@@@:       \`4@@@@F                             <u><a href="${config.resume_url}" target="_blank">resume</a></u>
        \`@@@@_.      ::g@@@                             爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
          ~@@@@gy__::y@@@@                              -----------
           \`~@@@@@@@\$@@@@@y                              CONTACT
              \`~4@@@@@@@@@@@,                            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                  \`~~4@@@@@@@                            <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                        \`\`~~                        
                                                    
                                                    
                                                    
`;
};

export default sumfetch;
