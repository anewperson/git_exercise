
Cherry Picking Scenarios
========================

### Merging my changes from trunk to version

Lets say we made some changes on the `master` branch and we want them (and only them) on a branch (`ver_4.1`) that is about to be deployed.

1. Clone the `cherry_picking` repo.

2. Cherry pick only the changes done to `violets.txt` into the `ver_4.1` branch.

    2. Expect a merge conflict!

3. Make sure the new commit you make to `ver_4.1` includes only changes to the `violets.txt` file!

4. Make sure the `violets.txt` on `ver_4.1` now reads:

    ```
    Roses are red
    Violets are blue
    I know you'd like cherry picking
    Because I do too

    Roses are red
    Violets are blue
    I've never found someone as patient
    As you

    Roses are red
    Violets are blue
    If you get lost
    Then I'll look for you

    Roses are red
    Violets are blue
    You know I'm always sorry
    When I hurt you

    Roses are red
    Violets are blue
    If you don't believe me
    Then what else can I do
    ```

### Merging changes from version back to trunk

1. Use the `cherry_picking` repo from earlier.

2. Create and commit a new paragraph of your own to the `violets.txt` poem file.

3. Cherry pick the new change back to the `master` branch.

4. Commit and push the new changes.

### Publishing poetry

1. Use the `cherry_picking` repo from earlier.

2. Pull request the new paragraph you added back to the original `cherry_picking` repo.

3. Hope for the best.

### Filtering local work with cherry picking

1. Clone the exercise repo.

2. Create a new branch at the top of the master branch called `in_process`.

3. Switch to `in_process` branch.

4. Create 6 files making 6 commits to that branch.

5. Switch back to the `master` branch.

6. Cherry pick the top 3 commits.

7. Commit the new changes.

8. Delete (force) the `in_process` branch.
