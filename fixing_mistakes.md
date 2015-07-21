
Fixing Mistakes
===============

### Using Git bisect to locate a bug

1. Clone the `sad_story` repo locally.

2. Select all commits you want to run bisect for.

3. Start the bisect process.
    Use "Commands" -> "Bisect..."

    ![Bisect](images/bisect.png)

4. Mark and test either good revision or bad revision.

    ![Bisect](images/bisect_proc.png)

2. Repeat until you find the buggy commit.

### Using cherry picking

1. Clone the exercise repo.

2. Create a new branch at the top of the master branch called `in_process`.

3. Switch to `in_process` branch.

4. Create 6 files making 6 commits to that branch.

5. Switch back to the `master` branch.

6. Cherry pick the top 3 commits.

7. Commit the new changes.

8. Delete (force) the `in_process` branch.

### Using patches

1. Clone the exercise repo (yes again ☺).

2. Create a patch from the commit you made in the cherry picking exercise.

3. Apply that patch to the exercise repo you just cloned.

4. Commit the new changes.
