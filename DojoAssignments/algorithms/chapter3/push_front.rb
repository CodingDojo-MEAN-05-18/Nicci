push_arr = Array[11,22,33]
alt_arr = []
$i = 0
$num = push_arr.length+1

while $i < $num do
    puts push_arr[$i] = alt_arr[$i+1]
    $i += 1
end    
push_arr[0] = 44
puts push_arr

a = [11,3,2]
# puts a
[1] + a
puts a


def merge(array_1, array_2)
  return enum_for(__method__, array_1, array_2) unless block_given?

  a = array_1.each
  b = array_2.each
  loop { yield a.peek < b.peek ? a.next : b.next }

  # Your code is not working because the equivalent of these two lines
  # is missing. After you reach the end of one array you have to append
  # all remaining elements of the other array. I am doing this here by
  # just exhausting both enumerators, one of which is empty by now.

  loop { yield a.next }
  loop { yield b.next }
end

p merge([5], [4, 6, 7, 12, 13]).entries
# p merge([5, 8, 9, 11], [4, 6, 7, 12, 13]).entries
p merge([5, 8, 9, 11], [13]).entries
   