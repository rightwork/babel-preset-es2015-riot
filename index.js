module.exports = {
  plugins: [
   ['transform-es2015-template-literals', {'loose': true}],
    'transform-es2015-literals',
    'transform-es2015-function-name',
    'transform-es2015-arrow-functions',
    'transform-es2015-block-scoped-functions',
    ['transform-es2015-classes', {'loose': true}],
    'transform-es2015-object-super',
    'transform-es2015-shorthand-properties',
    ['transform-es2015-computed-properties', {'loose': true}],
    ['transform-es2015-for-of', {'loose': true}],
    'transform-es2015-sticky-regex',
    'transform-es2015-unicode-regex',
    'check-es2015-constants',
    ['transform-es2015-spread', {'loose': true}],
    'transform-es2015-parameters',
    ['transform-es2015-destructuring', {'loose': true}],
    'transform-es2015-block-scoping',
    'transform-es2015-typeof-symbol',
    ['transform-es2015-modules-commonjs', { 'allowTopLevelThis': true }],
    ['transform-regenerator', { 'async': false, 'asyncGenerators': false }]
  ]
}