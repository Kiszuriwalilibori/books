function spacesCount(str: string): number {
  return str.includes(" ") ? str.match(/ /gi)!.length : 0;
}

function getSummary(str: string): string {
  let x = str.replace("<p>", "").replace("</p>", "");

  return spacesCount(x) > 5 ? x.split(" ").slice(0, 4).join(" ") + "..." : x;
}

export default getSummary;
