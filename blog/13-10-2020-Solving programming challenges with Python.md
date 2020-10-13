>“Everyone in this country should learn to program a computer, because it teaches you to think.” — Steve Jobs

** One of the most important parts of learning to code is learning how to solve coding problems. It will help you to improve your problem solving skills as a programmer.**


[Codingbat](https://www.codingbat.com) is a competitive programming website were programmers get to attempt to solve programming challenges.

Today, we're are going to attempt solving some of these challenges wich I have randomly selected from the website.

---

1. Challenge 1
> Return the number of even `ints` in the given array. Note: the % "mod" > operator computes the remainder, e.g. 5 % 2 is 1.
```bash
count_evens([2, 1, 2, 3, 4]) ? 3  
count_evens([2, 2, 0]) ? 3  
count_evens([1, 3, 5]) ? 0
```

**Solution**

```python
def count_evens(nums):
  return len([i for i in nums if i % 2 == 0])
```
---
2. Challenge 2
> Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.
```bash
big_diff([10, 3, 5, 6]) ? 7  
big_diff([7, 2, 10, 9]) ? 8  
big_diff([2, 10, 7, 2]) ? 8
```

**Solution**

```python
def big_diff(nums):
  return max(nums) - min(nums)
```

---
3. Challenge 3
> Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

```bash
centered_average([1, 2, 3, 4, 100]) ? 3  
centered_average([1, 1, 5, 5, 10, 8, 7]) ? 5  
centered_average([-10, -4, -2, -4, -2, 0]) ? -3
```

**Solution**

```python
def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  return sum(nums) / len(nums)

```
---
4. Challenge 4
> Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
```bash
sum13([1, 2, 2, 1]) ? 6  
sum13([1, 1]) ? 2  
sum13([1, 2, 2, 1, 13]) ? 6
```

**Solution**

```python
def sum13(nums):
  return sum(i for i, j in zip(nums, [0] + nums) if 13 not in (i, j))
```

4. Challenge 5
> Given a string, return a string where for every char in the original, there are two chars.

```bash
double_char('The') → 'TThhee'
double_char('AAbb') → 'AAAAbbbb'
double_char('Hi-There') → 'HHii--TThheerree'
```

**Solution**

```python
def double_char(str):
  return ''.join([l * 2 for l in str])
```

## That was it.
If you want to attempt solving more coding challenges please head on to [codingbat](https://www.codingbat.com) and get your hands dirty.


## Happy coding.
