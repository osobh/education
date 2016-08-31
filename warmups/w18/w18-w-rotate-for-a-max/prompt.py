# Take a number: 56789. Rotate left, you get 67895.

# Keep the first digit in place and rotate left the other digits: 68957.

# Keep the first two digits in place and rotate the other ones: 68579.

# Keep the first three digits and rotate left the rest: 68597. 
# Now it is over since keeping the first four it remains only 
# one digit which rotated is itself.

# You have the following sequence of numbers:

# 56789 -> 67895 -> 68957 -> 68579 -> 68597

# and you must return the greatest: 68957.

# Calling this function max_rot

# max_rot(56789) should return 68957

def max_rot(n):
	
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python = []
	
	number_array = [int(x) for x in str(n)]
	
	first_number = 0
	super_encrypted_XXXXxxxXXXX_String = ''.join(str(e) for e in number_array)
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python.append(super_encrypted_XXXXxxxXXXX_String)
	
	# our first number is swapped in place with the last number as is
	number_array.append(number_array[0])
	number_array.pop(0)
	first_number = number_array
	super_encrypted_XXXXxxxXXXX_String01 = ''.join(str(e) for e in first_number)
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python.append(super_encrypted_XXXXxxxXXXX_String01)
	
	# our second number freezes the first index and then performs the swap
	second_number = 0 
	number_array.append(number_array[1])
	number_array.pop(1)
	second_number = number_array
	super_encrypted_XXXXxxxXXXX_String02 = ''.join(str(e) for e in second_number)
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python.append(super_encrypted_XXXXxxxXXXX_String02)

	# our third number freezes the second index and then performs the swap
	third_number = 0 
	number_array.append(number_array[2])
	number_array.pop(2)
	third_number = number_array
	super_encrypted_XXXXxxxXXXX_String03 = ''.join(str(e) for e in third_number)
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python.append(super_encrypted_XXXXxxxXXXX_String03)

	# our fourth number freezes the second index and then performs the swap
	fourth_number = 0 
	number_array.append(number_array[3])
	number_array.pop(3)
	# print(number_array)
	fourth_number = number_array
	super_encrypted_XXXXxxxXXXX_String04 = ''.join(str(e) for e in fourth_number)
	list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python.append(super_encrypted_XXXXxxxXXXX_String04)
	
	final_answer_to_life_itself = max(list_of_all_my_matrix_buddies_living_in_max_rot_because_they_love_python)
	
	return int(final_answer_to_life_itself)
	
	
	
	
	
