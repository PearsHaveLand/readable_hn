// Add all comment elements to single list
var elements = document.getElementsByClassName('comment');

// Iterate through list, resizing comments and capping max width
for (var i = 0; i < elements.length; i++)
{
    elements[i].style.fontSize="1em";//"12px";
    elements[i].style.maxWidth="50em";
}

