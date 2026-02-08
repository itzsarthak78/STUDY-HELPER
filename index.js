const responseText = await response.text();
if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${responseText}`);
}
const data = JSON.parse(responseText);
