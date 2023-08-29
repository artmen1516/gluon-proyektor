import * as Gluon from '@gluon-framework/gluon'
import *  as child from 'child_process';

child.exec('cd ../neko/ && ./neko Proyektor.n', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

(async () => {
  const browsers = process.argv.slice(2).filter(x => !x.startsWith('-'));

  const gluonOptions = {
    windowSize: [800, 500],
    allowHTTP: true,
  };

  if (browsers.length > 0) { // use argv as browsers to use
    for (const forceBrowser of browsers) {
      await Gluon.open('http://localhost:7777/', {
        ...gluonOptions,
        forceBrowser,
      });
    }

    return;
  }

  await Gluon.open('http://localhost:7777/', { ...gluonOptions });
  
})();