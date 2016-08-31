```
  ________ ________  ________  __      __                                          
 /  _____/ \_____  \/  _____/ /  \    /  \_____ _______  _____  __ ________  ______
/   \  ___  /  ____/   __  \  \   \/\/   /\__  \\_  __ \/     \|  |  \____ \/  ___/
\    \_\  \/       \  |__\  \  \        /  / __ \|  | \/  Y Y  \  |  /  |_> >___ \ 
 \______  /\_______ \_____  /   \__/\  /  (____  /__|  |__|_|  /____/|   __/____  >
        \/         \/     \/         \/        \/            \/      |__|       \/ 
```        
# How To:

###To start:

Fork this repo, then clone your fork. In your local repository (the clone of your fork) set the remote 'upstream' to this repo:

```
git remote add upstream git@github.com:osobh/education.git
```

###Every day:

First: get the new code from the upstream:

```
git checkout master
git pull upstream master
```

Second: Work on the warmup for the day. Check the daily plan or wait for the announcement at 9:15 to know what to do.

Third: when you've completed the warmup (or at 10:00) push your work to your fork!

```
git push origin master
```

After the autograder runs, checkback for a branch called "autograder_solutions" on your fork. You can view this branch on github.com or you can pull the branch to your local repo with:

```
git fetch -a origin
git checkout autograder_solutions
```

Navigate to the folder for todays warmup, and check for a results.txt or an error.txt, which contains the information that the instructors get from running the autograder. 

You may not want to keep the autograder_solutions, but if you do you'll have to merge it into master manually:

```
git checkout master
git merge autograder_solutions
```
