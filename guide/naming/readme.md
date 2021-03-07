<!-- markdownlint-disable MD033 -->

# Naming

Naming is probably the **most important activity** that programmers do. Good names make code easy to read and understand
even by non-programmers. Bad names make code confusing and difficult even for the best programmers, and confusing code
makes for mistakes and bugs and makes them difficult to find and correct.

All code is a conversation not only between the programmer and the machine -- which makes it essential to get it exactly
right as the machine is very literal-minded -- but more importantly between programmers, whether it is the next
programmer to touch the code or other members of the team or the client or even the same programmer but months or years
later.

Code should make clear exactly what it does and its intentions. How it does it should be equally clear.

Terse is nice, but only if it is accomplished without adversely affecting clarity.

## Guides for naming

1. Use plain English. For better or worse, the language of programming is English.
2. Abbreviate **ONLY** when the abbreviation is very widely understood (e.g., you wouldn't spell out "et
   cetera"&mdash;etc is enough).
3. Use `camelCase` (also called "lower camelcase") for names of functions and variables.
4. Use `PascalCase` (sometimes called "upper camelcase") form names of React components (and classes, but we will avoid
   classes like the plague&mdash;because they are a plague).
5. Use `train-case` for folder names that will become path elements in a URL (e.g., in `pages/`).
6. Use `SCREAMING_SNAKE_CASE` for constants.
7. **NO MAGIC NUMBERS.** Use <b style="color: red">constants</b>.

   1. Put a `constants.ts` file in the folder at the appropriate level in the folder hierarchy (i.e., keep module
      constants in the module, put global constants in the top-level `constants.ts` file).
   2. Give each constant a name that makes sense.
   3. Use constants whenever you are going to use a string or number in more than one place _and you need it to be the
      same_. For example:

   <b style="color: red">INSTEAD OF THIS:</b>

   ```tsx
   describe('a pointless test', () => {
     it('is really pointless', () => {
       expect('red').toBe('red')
     })
   })
   ```

   <b style="color: red">DO THIS:</b>

   ```tsx
   describe('a pointless test', () => {
     it('is really pointless', () => {
       const RED = 'red'

       expect(RED).toBe(RED)
     })
   })
   ```

   This guarantees that you are working with the same string.

   <b style="color: red">Similarly, INSTEAD OF THIS:</b>

   ```tsx
   const hats = new Array(5) // Why five? What is five?
   ```

   <b style="color: red">DO THIS:</b>

   ```tsx
   const NUMBER_OF_HATS = 5

   const hats = new Array(NUMBER_OF_HATS) // Now we know precisely what we are counting
   ```

8. <b style="color: red">Functions are verbs</b>, so use verbs to name them!

   1. If the function renders components, name it `render<ComponentName>s`, e.g., `renderLinks`.
   2. If the function does CRUDL, use the CRUDL names with the name of the object(s) operated on:
      1. `createUser`
      2. `retrieveAccount`
      3. `updateProfile`
      4. `deleteTeam`
      5. `listFlavors` (note the plural)
   3. Use the verb that describes what it does, e.g.:

      1. `sortUsersByLastNameAscending` (probably from partially-applying `sortUsers`):

         ```tsx
         const sortUsersByLastNameAscending = sortUsers(NAME_LAST)(ASC)

         console.log(sortUsersByLastNameAscending(users)) // => ['Ali', 'Brown', 'Czerb']
         ```

      2. `filterDogsByBreed` (mabye used by partially-applying as well):

         ```tsx
         console.log(filterDogsByBreed([DALMATION, POODLE])(dogs))
         ```

      3. `calculateSalesTax`

   4. Do NOT use a noun representing the return value: `listDogs()` NOT `dogs()`

9. <b style="color: red">Variables are nouns</b>, so use nouns to name them! Be specific.

   1. Use `SCREAMING_SNAKE_CASE` when:

      1. The constant is a mathemtatical or physical constant: `PI`, `ACCELERATION_DUE_TO_GRAVITY`.
      2. The constant is used as a flag to turn something on or off, or in a switch: `WATCH`, `INPUT`, `SELECT`.
      3. The constant is part of an enumeration:

         ```tsx
         const availableColors = {
           RED: 'red',
           BLUE: 'blue',
           GREEN: 'green',
         }

         // In use: availableColors.RED
         ```

   2. Use `camelCase` for all other variable names.
      1. Avoid all CAPS as they make names difficult to read at a glance:
         1. `UrlForSite` <b style="color: red">NOT</b> `URLForSite`.
         2. `userId` <b style="color: red">NOT</b> `userID`.
         3. `jsonToken` <b style="color: red">NOT</b> `JSONToken` or `jSONToken` (ugh)
         4. Be consistent! Inconsistency means we're always having to guess the case of the name.
         5. Note: lowercasing all subsequent letters in abbreviations makes it much easier to generate camelCase from
            other cases without error.
   3. If the variable, prop, or attribute is a boolean used to indicate state, prepend it with `is`, `has`, or similar,
      or append what happened:
      1. `isOpen`
      2. `hasProfile`
      3. `verificationFailed`
      4. Be as clear as possible.
   4. With booleans, choose the name such that the expected value is **`false`**. This way if the value is not set, it
      doesn't break anything because undefined is falsy.
      1. For example, choose `isVerified` rather than `isUnverified` because in this instance you want it to **fail** if
         the value isn't set. You must deliberately set `isVerified` to `true` to grant someone access.
      2. But you don't want to accidentally ban someone, so choose `isBanned` rather than `isEnabled` because then you
         have to consciously set the value to `true` to ban the person.
      3. Put some thought into naming of booleans and it will yield benefits.
   5. If a variable mirrors a prop or HTML attribute, use the same name where possible, e.g., `allowFullScreen`.
   6. Otherwise, name it what it is:

      ```tsx
      // Note: an `email` is what you send. You send the email to an `email address`. Be precise!
      const emailAddress = parseEmailAddressFromToken(token)
      const userId = '3faf9e0b-2f90-4c49-9971-08e79b759704'
      const token = generateToken(userId, emailAddress)
      ```

10. <b style="color: red">AVOID COMMENTS</b>
    1. Use comments in code **only** to indicate when something has deliberately been hacked, or is a workaround, or is
       different from what one would expect. This is to prevent you (or someone else) from coming to your code at a
       later date and thinking, "What the hell?" And then "fixing" the code only to discover that _there was a good
       reason that it was done in a funky way_. I have made this mistake myself way too many times, spending hours
       rewriting code only to discover (and suddenly recall) that _there's a bug in some dependency or whatever_ and the
       previous code was the workaround.
       1. ALWAYS, ALWAYS, ALWAYS note workarounds or hacks in your code!
       2. I have no problem with a // FIXME or // TODO comment to remind us that the workaround isn't forever and to fix
          it when we can.
    2. You should never have to write comments to explain code that is properly written!
       1. Your code should be obvious, clear, and immediately understandable.
       2. To this end <b style="color: red">STOP TRYING TO BE CLEVER</b>. "Clever" code is stupid code.
    3. <b style="color: red">Murder all your darlings!</b> If you are inordinately proud of some piece of code, then it
       is probably bad code or gratuitous. Rip it out and do it the boring _expected_ way. You'll thank yourself for it
       later.

**Whenever you write code, check it and ask yourself if it would be understandable by your grandparents without much
help from you. Does it read like plain English? If not, try to make it clearer and more self-explanatory.**

  <!-- markdownlint-enable MD033 -->
