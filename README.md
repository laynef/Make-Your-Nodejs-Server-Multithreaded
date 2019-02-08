# Make Your Node.js Server Scalable with Multithreads

## Multiple Thread Comparsions
- By defaut Ruby on Rails runs 5 worker processes
- By default I set the max which today is 8 worker processes

## Installation
- Add multithreads.js into your project
- Add your Node.js server file path into the require for multithreads.js

## Deployment
- This file requires more space on an EC2 than T2.Micro due to the memory needed for worker processes.
- Use a T2 Small by default, then if you scale past 8 threads, it is suggested that you auto-scale your EC2s
(Using more than 8 threads can cause cross-thread errors due to poor API design, if you increase the threads past 8 increase the size of your server to meet the needs of your threads)

```
node multithreads.js
```
