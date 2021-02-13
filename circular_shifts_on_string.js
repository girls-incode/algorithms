/* 
Shifting Strings

Perform some number of left and right circular shifts on a string.

The following operations on a string are defined:
Left Shift: A single circular rotation of the string in which the first character becomes the last character and all other characters are shifted one index to the left. For example, abcde becomes bcdea after one left shift and cdeab after two left shifts.
Right Shift: A single circular rotation of the string in which the last character becomes the first character and all other characters are shifted one index to the right. For example, abcde becomes eabcd after one right shift and deabc after two right shifts.

Example:

s = 'abcdefg'

leftShifts = 2

rightShifts = 4

The string abcdefg shifted left by 2 positions is cdefgab. The string cdefgab shifted right by 4 positions is fgabcde, the string to return.

Complete the function getShiftedString with the following parameter(s):

string s: the string to shift
int leftShifts: number of shifts left
int rightShifts: number of shifts right

Returns:
string: a string shifted left or right

Constraints
	1 ≤ length of s ≤ 105
	0 ≤ leftShifts, rightShifts ≤ 109
	String s consists of lowercase English alphabetic letters only, ascii[a-z].

Sample 1:

s = "abcd"
leftShifts = 1
rightShifts = 2

Output: dabc

Initially, s is abcd
leftShifts = 1 : abcd → bcda	
rightShifts = 2 : bcda → abcd → dabc

Sample 2:

s = "a"
leftShifts = 0
rightShifts = 1

Output: a

A one character string is unchanged regardless of the number of shifts performed.
*/

function  getShiftedString(s) {
	const arr = Array.from(s);
	const netLeftShifts = (leftShifts - rightShifts) % arr.length;
	return [...arr.slice(netLeftShifts), ...arr.slice(0, netLeftShifts)].join('')
}
