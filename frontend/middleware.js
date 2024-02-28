import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (req, res, next) {
  const target = 'http://localhost:5000';
  createProxyMiddleware({
    target,
    changeOrigin: true,
    ws: true,
    pathRewrite: { '^/api': '' },
  })(req, res, next);
};