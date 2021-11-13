// ./test.jsonで動かしたかったが、どうも`deno run`を実行するディレクトリのパスが参照されるっぽい
// const text = await Deno.readTextFile("./test.json");
const text = await Deno.readTextFile("./5_read_write/test.json");
console.log(text);
