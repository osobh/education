# Operation Parse Coordinates

You work for a spy agency for the city of Detroit, so your department is severely under-funded.

Your equipment cannot process graphics, so your home-base sends you ASCII maps of
your targets' locations.

Your mission, should you choose to accept it, it to be able to parse these maps, and derive
X and Y coordinates from it.

* The maps can be any size.
* The X-axis starts at 0, and increases as it goes right.
* The Y-axis starts at 0, and decreases as it goes down.

## Examples

Given the following map, the coordinates would be `[0,0]`

    +==========+
    |X*********|
    |**********|
    |**********|
    |**********|
    |**********|
    +==========+

Given the following map, the coordinates would be `[1, -2]`

    +======+
    |******|
    |******|
    |*X****|
    +======+

Given the following map, the coordinates would be `[6, -3]`

    +===================================+
    |***********************************|
    |***********************************|
    |***********************************|
    |******X****************************|
    |***********************************|
    |***********************************|
    |***********************************|
    |***********************************|
    +===================================+

# Extra

Go through each file in the data directory and display the coordinates.

Then, keep track of the different coordinates and display the deltas.  For example, if you had
the following coordinates:

```
[0,0]
[0,-1]
[1,-1]
[0,-1]
```

You would display:

```
started
moved south by 1
moved east by 1
moved west by 1
```

# Setup

* Fork
* Clone
* Turn on TravisCI for the fork by
  visiting https://travis-ci.org/profile/<github user name>, clicking the "Sync now" button
  and scrolling down to find the repository to build.
* Create a new branch for your work using `git checkout -b v1`
* Implement specs and code
* Push using `git push -u origin v1`

## Further Practice

This warmup can be completed multiple times to increase your comfort level with the material.
To work on this from scratch, you can:

1. Add an upstream remote that points to the original repo `git remote add upstream git@github.com:gSchool/operation-parse-coordinates.git`
1. Fetch the latest from the upstream remote using `git fetch upstream`
1. Create a new branch from the master branch of the upstream remote `git checkout -b v2 upstream/master`
1. Implement specs and code
1. Push using `git push -u origin v2`

Each time you do the exercise, create a new branch. For example the 3rd time you do the exercise the branch
name will be v3 instead of v2.
