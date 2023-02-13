# CodeSnippets

This is set of my code snippets for reuse.

## 1. Javascript

### Array deduplication

There are many ways to remove all duplicate values from the array. Here we will talk about the simplest way, which can be done with one line of code.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/array_deduplication.js)
The uniqueArr method converts the data to a Set and then deconstructs it into an array to return.

### Get parameters from url and convert them to object

The web page path is often in the form of: www.google.com.hk?search=js&xxx=kkk. We often need to take parameters, which can be implemented by using a third-party qs package. If you just want to remove parameters, this sentence of code will It can be achieved without introducing qs.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/get_param_from_url_convert_obj.js)

### Check whether the object is empty

Checking if the object is empty is actually not that simple. Even if the object is empty, it returns false every time it checks if the object is equal to {}.
Fortunately, [the following single line of code](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/check_obj_empty.js) is exactly what we want.

### reverse the string

Reversing strings can be easily achieved using split combined with the reverse and join methods.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/reverse_str.js)

### Generate random hex

Generate random numbers I believe you can do it at your fingertips, then generate hexadecimal randomly, such as generating hexadecimal color values.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/gen_random_hex.js)

### Check that the current TAB is in the background

Browsers use tabbed browsing, any web page may be in the background, at this time the user is not browsing, know how to quickly detect, if your web page is hidden or visible to the user?
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/check_cur_tab_back.js)

### Detect if an element is in focus

The activeElement property returns the currently focused element in the document.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/detect_elem_in_focus.js)

### Check device type

Use navigator.userAgent to determine whether it is a mobile device or a computer device:
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/check_device_type.js)

### Copy text to the clipboard

Clipboard API All its operations are asynchronous and return Promise objects, which will not cause page freezes. Moreover, it can put arbitrary content (such as pictures) into the clipboard.
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/copy_text_clip.js)

### get selected text

Use the built-in getSelection to get the text selected by the user:
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/get_sel_txt.js)

### Check if a day is a working day

We often use it when we write our own calendar components to determine whether a date is a working day; Monday to Friday is a working day:
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/check_working_day.js)

### Convert Fahrenheit/Celsius

[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/convert_fh_cel.js)

### The number of days between two dates

In daily development, we often encounter the need to display the remaining days. Generally, we need to calculate the difference in days between two dates:
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/number_dates_between.js)

### Convert RGB to Hex

[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/convert_rgb_hex.js)

### Calculate the mean of an array

There are many ways to calculate the average, and the logic of the calculation is the same, but the implementation methods are different. A simple line of code is implemented:
[Click here to view code.](https://github.com/ForestSapphire/CodeSnippets/blob/main/Javascript/cal_mean_array.js)
