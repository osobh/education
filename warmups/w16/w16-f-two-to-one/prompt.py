# Take 2 strings s1 and s2 including only letters from 
# ato z. Return a new sorted string, the longest possible, 
# containing distinct letters, - each taken only once - 
# coming from s1 or s2.

# Examples:

# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

def longest(s1, s2):
	new_set = s1 + s2
	combined_set = set(new_set)
	final_set = sorted(combined_set)
	print final_set
	finished_set = "".join(final_set)
	return finished_set