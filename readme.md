MAIN TAKEAWAYS:

**1. TDD & JEST**
1. workflow: write a test -> write implementation -> commit
2. use editable class/function names in 'describe' to rename them later automatically if need be

<code>describe(YourClassName.name, () => ...)</code>

3. useful jest commands:

<code>it.skip(...)</code>

<code>it.only(...)</code>

4. toThrow must be wrapped in a callback:

<code>expect(() => tn.divide(0)).toThrow("You cannot divide by zero");</code>

[VSCode: custom "expth" snippet]

5. Coverage:
- "Statements" refer to the Abstract Syntax Tree.

<em>In computer science, an abstract syntax tree (AST), or just syntax tree, is a tree representation of the abstract syntactic structure of text (often source code) written in a formal language. Each node of the tree denotes a construct occurring in the text. (Wikipedia) </em>

- "Branches" are possible scenarios (every 'if' has two)

<code>npm run test -- --coverage</code>

**2. JAVASCRIPT**

JavaScript represents numbers using IEEE-754 64-bit format. In practice, this means that a JS number represented in binary system may be 65 chars long max (64 digits + plus/minus sign).

Displaying the result of subtraction from MIN_SAFE_INTEGER would require the 66th "spot", which just isn't there. Any attempt to calculate such a number would cause <b>integer overflow</b>.

Protect your code against such pesky edge cases by using Number.MIN_SAFE_INTEGER & Number.MAX_SAFE_INTEGER.

**3. REGEX**

How to replace multiline spaces with a single space?

<code>string = string.replace(/  +/g, ' ');</code>

**4. HOW TO BE A CODER AND NOT A SCRIBE?**

*...or hacks for faster coding*

1. use git aliases

Template:

<code>git config --global alias.[short] [long]</code>

Example:

<code>git config --global alias.cob "checkout -b"</code>

2. use Source Control (Ctrl+Ent to commit);
3. use keyboard shortcuts
4. use snippets

File -> Prefs -> Snippets -> global snippets file