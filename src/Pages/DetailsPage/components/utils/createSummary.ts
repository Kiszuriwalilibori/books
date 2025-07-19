function spacesCount(str: string): number {
    return str.includes(" ") ? str.match(/ /gi)!.length : 0;
}

function createSummary(str: string): string {
    let summary = str.replace("<p>", "").replace("</p>", "");

    return spacesCount(summary) > 5 ? summary.split(" ").slice(0, 4).join(" ") + "..." : summary;
}

export default createSummary;
