const targetId = "#common";
const target = document.getElementById(targetId);
if (target != null) {
  const cmnHtmlPath = target.title;
  fetch(cmnHtmlPath)
    .then((response) => response.text())
    .then((data) => {
      if (data.length === 0) {
        console.log(`${cmnHtmlPath}が見つからない、または空です。`);
      }
      if (target === null) {
        console.log("idが${targetid}のものが見つかりませんでした");
      } else {
        target.innerHTML = data;
      }
    });
}
