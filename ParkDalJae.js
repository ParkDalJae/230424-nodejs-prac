let basicData = {
  header: {
    id: "header",
    type: "div",
    children: null,
  },
  main: {
    id: "main",
    type: "div",
    children: null,
  },
  footer: {
    id: "footer",
    type: "div",
    children: null,
  },
};
let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];
function exampleOne(object, array) {
  //basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고
  //null데이터타입이 할당되어있으면, 매개변수를 각각 할당한다.
  let Value = {};

  //header,main,footer HTML태그를 생성하는 로직으로
  //최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오
  for (let i in object) {
    if (object[i].children === null) {
      Value.innerHTML = `
        <${object.header.type} id="${object.header.id}">${array}</${object.header.type}>
        <${object.main.type} id="${object.main.id}">${array}</${object.main.type}>
        <${object.footer.type} id="${object.footer.id}">${array}</${object.footer.type}>
      `;
    }
  }
  return Value;
}
console.log(exampleOne(basicData, elementData).innerHTML);
// Value = `
// <${object.header.type} id="${object.header.id}">${}</${object.header.type}>
//   <${object.main.type} id="${object.main.id}">${}</${object.main.type}>
//   <${object.footer.type} id="${object.footer.id}">${}</${object.footer.type}>
// `;

// console.log(`
// <${object.header.type} id="${object.header.id}">${
//   array[array.length - array.length]
// }</${object.header.type}>
// <${object.main.type} id="${object.main.id}">${tmpAry}</${object.main.type}>
// <${object.footer.type} id="${object.footer.id}">${array[array.length]}</${
//   object.footer.type
// }
// `);
