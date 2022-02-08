/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const node = document.createElement(tag);
        node.textContent = content;
        document.body.append(node);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const createNodes = (n, childCount) => {
        const node = document.createElement('div');
        node.classList.add('item_' + n);
        if (n < level) {
            for (let i = 0; i < childCount; i++) {
                node.appendChild(createNodes(n + 1, childCount));
            }
        }
        return node;
    };
    return createNodes(1, childrenCount);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const items = tree.getElementsByClassName('item_2');

    [...items].forEach((element) => {
        const sectionElem = document.createElement('SECTION');
        sectionElem.classList.add('item_2');

        const childrenElement = element.childNodes;

        [...childrenElement].forEach((el) => {
            sectionElem.appendChild(el);
        });

        element.replaceWith(sectionElem);
    });
    return tree;
}
