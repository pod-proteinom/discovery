FROM firesh/nginx-lua
RUN mkdir -p /etc/nginx/logs
COPY ./config/nginx/nginx.conf /etc/nginx
COPY ./public /var/www/public/assets
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]