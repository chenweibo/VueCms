import request from '@/utils/request'

export function getSite() {
  return request({
    url: '/site/getSite',
    method: 'get'
  })
}

export function updateSite(id) {
  return request({
    url: '/site/getSite',
    method: 'post',
    params: { id }
  })
}
