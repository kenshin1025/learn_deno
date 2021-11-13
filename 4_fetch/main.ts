// fetchをする際はWebを介した通信を行う事を許可するため`--allow-net`をつける必要がある.

/**
 * Output: JSON Data
 */
const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();
console.log(jsonData);

/**
 * Output: HTML Data
 */
const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);

/**
 * Output: Error Message
 */
try {
  await fetch("https://does.not.exist/");
} catch (error) {
  console.log(error);
}
