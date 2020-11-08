export const mapFirebaseDoc = (doc) => {
  return Object.entries(doc.fields).reduce((akk, [key, value]) => {
    const valueEntries = Object.entries(value);
    const val = valueEntries[0][1];
    const valueType = valueEntries[0][0];
    akk[key] = valueType === 'timestampValue' ? Date.parse(val) : val;

    return akk;
  }, {});
}
