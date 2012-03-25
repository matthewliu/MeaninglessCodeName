from django.middleware.csrf import get_token
from meaninglesscodename.web.controllers.BaseController import *
from meaninglesscodename.core.models import *
from meaninglesscodename import settings
from django.template.defaultfilters import slugify
from django.template import Context, loader
from datetime import *
import re

from meaninglesscodename import constants

import logging
import simplejson

import sys

logging.basicConfig(
    level = logging.DEBUG,
    format = '%(asctime)s %(levelname)s %(message)s',
    filename = '/tmp/debug.log',
    filemode = 'w'
)

class IndexController(BaseController):

    def render_index(self):
 
        debug_info = constants.BASE_PATH
        params = {'debug_info': debug_info}
        
        
        return self.render_to_response('index.html', params )

    def render_skeleton(self):
        return self.render_to_response('skeleton.html', {})

    def render_base(self):
        return self.render_to_response('base.html', {})

    def render_about(self):
        
        return self.render_to_response('static-about.html', {})

    def render_howitworks(self):
        return self.render_to_response('static-howitworks.html', {})

    def render_faq(self):
        return self.render_to_response('static-faq.html', {})

    def render_terms(self):
        return self.render_to_response('static-terms.html', {})

    def render_contact(self):
        return self.render_to_response('static-contact.html', {})


"""
Insert Methods Here
"""