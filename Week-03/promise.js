function doJob(job, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  });
}

async function runJobs() {
  let now = new Date();
  console.log(`開始工作 at ${now.toISOString()}`);

  let result = await doJob("刷牙", 1000);
  console.log(result);

  result = await doJob("吃早餐", 3000);
  console.log(result);

  result = await doJob("寫功課", 1000);
  console.log(result);

  result = await doJob("吃午餐", 2000);
  console.log(result);
}

runJobs();
