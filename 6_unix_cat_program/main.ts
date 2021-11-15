for (const filename of Deno.args) {
  const text = await Deno.readTextFile(filename);
  console.log(text);
}
