from http.server import BaseHTTPRequestHandler
from datetime import datetime
# from rest_framework import routers, serializers, viewsets
# from rest_framework.response import Response

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    self.wfile.write(str('create api server with now').encode('UTF-8'))
    return
