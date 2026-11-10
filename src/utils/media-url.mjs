/** Remove outer formatting only. Never delete meaningful filename characters.
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeMediaUrl(value) {
  if (typeof value !== 'string') return '';
  let input = value.trim();
  const wrapper = input.match(/^(`+)([\s\S]*?)\1$/);
  if (wrapper) input = wrapper[2].trim();
  if (!input || /[\u0000-\u001f\u007f]/.test(input)) return '';
  const relative = input.startsWith('/') && !input.startsWith('//');
  if (!relative && !/^https?:\/\//i.test(input)) return '';
  try {
    const url = new URL(input, 'https://media-fixture.invalid');
    if (relative && url.origin !== 'https://media-fixture.invalid') return '';
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return '';
    // URL serialization encodes raw spaces/Unicode without double-encoding %20.
    return relative ? `${url.pathname}${url.search}${url.hash}` : url.href;
  } catch { return ''; }
}
