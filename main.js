function name(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (("a" == name[i]) || ("e" == name[i]) || ("i" == name[i]) || ("o" == name[i]) || ("u" == name[i])) {
            count++;
        }
    }
    console.log(count);
}
name("Expression");