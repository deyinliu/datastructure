// print every dom and return dom amount
function domTrace(root) {
    if (!root) {
        return 0;
    }
    const queue = [root];
    let cur = "";
    let i = 0;
    while (queue.length) {
        cur = queue.shift();
        i++;
        console.log(cur.tagName.toLowerCase());
        if (!cur.children.length) {
            continue;
        } else {
            for (const child of cur.children) {
                queue.push(child);
            }
        }
    }
    return i;
}
