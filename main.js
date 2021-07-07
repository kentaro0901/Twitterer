window.addEventListener("load", () => {main();}, false);

const main = () => {
    setTimeout(() => {startChangeText();}, 10000);
    const startChangeText = () => {
        setInterval(() => {changeText();}, 1000);
    }
    const changeText = () => {
        $('article').each((i,e) => {
            const id = $(e).attr("data-tweet-id");
            const num = Number(id) % 3;
            $(e).find('.tweet-text').text(texts[num]);
        });
    }
    const texts = [
        "暇さえあればすぐTwitter開くの草",
        "一時間我慢することもできないの？",
        "俺でも流石に1日はツイ禁できるぞ"
    ];
};