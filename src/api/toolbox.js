import jsonp from '../common/js/jsonp'
export function  getSchoolList(){
  const url = 'https://gkcx.eol.cn/api'
  let data = { 
    uri: "gksjk/api/school/hotlists", 
    page: 1, 
    request_type:1,
    size: 20,
    sort: "view_total",
  }
  const options = {
    param: 'jsonpCallback'
  }
  return jsonp(url, data, options)
}