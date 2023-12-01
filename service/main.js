function showContent(tag) {
    const parentElement = tag.parentElement;
    if (parentElement.classList.contains('show')) parentElement.classList.remove('show');
    else parentElement.classList.add('show');
}
