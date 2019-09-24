import cookieUniversal from 'cookie-universal'

export default (ctx, inject) => {
  const { req, res } = ctx
  const options = JSON.parse(`<%= JSON.stringify(options, null, 2) %>`)
  const cookies = cookieUniversal(req, res, options.parseJSON)
  ctx['$' + options.alias] = cookies

  inject(options.alias, cookies)
}
