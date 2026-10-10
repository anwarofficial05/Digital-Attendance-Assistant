#!/usr/bin/env python3
"""
Synexia Digital Attendance Assistant
Local HTTP Server for Hackathon Demonstration
Automatically opens default web browser to the application.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable aggressive caching for live demo
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Try PORT or fall back if busy
    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                url = f"http://localhost:{port}/index.html"
                print("=" * 65)
                print("🚀 SYNEXIA DIGITAL ATTENDANCE ASSISTANT IS LIVE!")
                print("=" * 65)
                print(f"👉 Local URL: {url}")
                print("👉 Problem Statement 10: Digital Attendance Assistant")
                print("👉 Press Ctrl+C in terminal to stop server.")
                print("=" * 65)
                webbrowser.open(url)
                httpd.serve_forever()
        except OSError:
            port += 1

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n[INFO] Server stopped by user.")
        sys.exit(0)
