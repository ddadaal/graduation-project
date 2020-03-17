# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: instance.proto

from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='instance.proto',
  package='instance',
  syntax='proto3',
  serialized_options=b'\252\002&AcademyCloud.Resources.Protos.Instance',
  serialized_pb=b'\n\x0einstance.proto\x12\x08instance\x1a\x1fgoogle/protobuf/timestamp.proto\"\x15\n\x13GetInstancesRequest\"Q\n\x06\x46lavor\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03\x63pu\x18\x03 \x01(\x05\x12\x0e\n\x06memory\x18\x04 \x01(\x05\x12\x10\n\x08rootDisk\x18\x05 \x01(\x05\"\xda\x01\n\x08Instance\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12 \n\x06\x66lavor\x18\x03 \x01(\x0b\x32\x10.instance.Flavor\x12(\n\x06status\x18\x04 \x01(\x0e\x32\x18.instance.InstanceStatus\x12\n\n\x02ip\x18\x05 \x01(\t\x12\x11\n\timageName\x18\x06 \x01(\t\x12.\n\ncreateTime\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x19\n\x11totalStartupHours\x18\x08 \x01(\x05\"=\n\x14GetInstancesResponse\x12%\n\tinstances\x18\x01 \x03(\x0b\x32\x12.instance.Instance\"\x13\n\x11GetFlavorsRequest\"7\n\x12GetFlavorsResponse\x12!\n\x07\x66lavors\x18\x01 \x03(\x0b\x32\x10.instance.Flavor\"\x12\n\x10GetImagesRequest\"2\n\x05Image\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07minDisk\x18\x03 \x01(\x05\"4\n\x11GetImagesResponse\x12\x1f\n\x06images\x18\x01 \x03(\x0b\x32\x0f.instance.Image\"X\n\x15\x43reateInstanceRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x10\n\x08\x66lavorId\x18\x02 \x01(\t\x12\x0f\n\x07imageId\x18\x03 \x01(\t\x12\x0e\n\x06volume\x18\x04 \x01(\x05\",\n\x16\x43reateInstanceResponse\x12\x12\n\ninstanceId\x18\x01 \x01(\t*\x1d\n\x0eInstanceStatus\x12\x0b\n\x07Shutoff\x10\x00\x32\xc4\x02\n\x0fInstanceService\x12M\n\x0cGetInstances\x12\x1d.instance.GetInstancesRequest\x1a\x1e.instance.GetInstancesResponse\x12G\n\nGetFlavors\x12\x1b.instance.GetFlavorsRequest\x1a\x1c.instance.GetFlavorsResponse\x12\x44\n\tGetImages\x12\x1a.instance.GetImagesRequest\x1a\x1b.instance.GetImagesResponse\x12S\n\x0e\x43reateInstance\x12\x1f.instance.CreateInstanceRequest\x1a .instance.CreateInstanceResponseB)\xaa\x02&AcademyCloud.Resources.Protos.Instanceb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])

_INSTANCESTATUS = _descriptor.EnumDescriptor(
  name='InstanceStatus',
  full_name='instance.InstanceStatus',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='Shutoff', index=0, number=0,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=791,
  serialized_end=820,
)
_sym_db.RegisterEnumDescriptor(_INSTANCESTATUS)

InstanceStatus = enum_type_wrapper.EnumTypeWrapper(_INSTANCESTATUS)
Shutoff = 0



_GETINSTANCESREQUEST = _descriptor.Descriptor(
  name='GetInstancesRequest',
  full_name='instance.GetInstancesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=61,
  serialized_end=82,
)


_FLAVOR = _descriptor.Descriptor(
  name='Flavor',
  full_name='instance.Flavor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='instance.Flavor.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='instance.Flavor.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='cpu', full_name='instance.Flavor.cpu', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='memory', full_name='instance.Flavor.memory', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='rootDisk', full_name='instance.Flavor.rootDisk', index=4,
      number=5, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=84,
  serialized_end=165,
)


_INSTANCE = _descriptor.Descriptor(
  name='Instance',
  full_name='instance.Instance',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='instance.Instance.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='instance.Instance.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='flavor', full_name='instance.Instance.flavor', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='status', full_name='instance.Instance.status', index=3,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ip', full_name='instance.Instance.ip', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='imageName', full_name='instance.Instance.imageName', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='createTime', full_name='instance.Instance.createTime', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='totalStartupHours', full_name='instance.Instance.totalStartupHours', index=7,
      number=8, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=168,
  serialized_end=386,
)


_GETINSTANCESRESPONSE = _descriptor.Descriptor(
  name='GetInstancesResponse',
  full_name='instance.GetInstancesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='instances', full_name='instance.GetInstancesResponse.instances', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=388,
  serialized_end=449,
)


_GETFLAVORSREQUEST = _descriptor.Descriptor(
  name='GetFlavorsRequest',
  full_name='instance.GetFlavorsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=451,
  serialized_end=470,
)


_GETFLAVORSRESPONSE = _descriptor.Descriptor(
  name='GetFlavorsResponse',
  full_name='instance.GetFlavorsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='flavors', full_name='instance.GetFlavorsResponse.flavors', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=472,
  serialized_end=527,
)


_GETIMAGESREQUEST = _descriptor.Descriptor(
  name='GetImagesRequest',
  full_name='instance.GetImagesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=529,
  serialized_end=547,
)


_IMAGE = _descriptor.Descriptor(
  name='Image',
  full_name='instance.Image',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='instance.Image.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='instance.Image.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='minDisk', full_name='instance.Image.minDisk', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=549,
  serialized_end=599,
)


_GETIMAGESRESPONSE = _descriptor.Descriptor(
  name='GetImagesResponse',
  full_name='instance.GetImagesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='images', full_name='instance.GetImagesResponse.images', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=601,
  serialized_end=653,
)


_CREATEINSTANCEREQUEST = _descriptor.Descriptor(
  name='CreateInstanceRequest',
  full_name='instance.CreateInstanceRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='instance.CreateInstanceRequest.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='flavorId', full_name='instance.CreateInstanceRequest.flavorId', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='imageId', full_name='instance.CreateInstanceRequest.imageId', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='volume', full_name='instance.CreateInstanceRequest.volume', index=3,
      number=4, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=655,
  serialized_end=743,
)


_CREATEINSTANCERESPONSE = _descriptor.Descriptor(
  name='CreateInstanceResponse',
  full_name='instance.CreateInstanceResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='instanceId', full_name='instance.CreateInstanceResponse.instanceId', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=745,
  serialized_end=789,
)

_INSTANCE.fields_by_name['flavor'].message_type = _FLAVOR
_INSTANCE.fields_by_name['status'].enum_type = _INSTANCESTATUS
_INSTANCE.fields_by_name['createTime'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_GETINSTANCESRESPONSE.fields_by_name['instances'].message_type = _INSTANCE
_GETFLAVORSRESPONSE.fields_by_name['flavors'].message_type = _FLAVOR
_GETIMAGESRESPONSE.fields_by_name['images'].message_type = _IMAGE
DESCRIPTOR.message_types_by_name['GetInstancesRequest'] = _GETINSTANCESREQUEST
DESCRIPTOR.message_types_by_name['Flavor'] = _FLAVOR
DESCRIPTOR.message_types_by_name['Instance'] = _INSTANCE
DESCRIPTOR.message_types_by_name['GetInstancesResponse'] = _GETINSTANCESRESPONSE
DESCRIPTOR.message_types_by_name['GetFlavorsRequest'] = _GETFLAVORSREQUEST
DESCRIPTOR.message_types_by_name['GetFlavorsResponse'] = _GETFLAVORSRESPONSE
DESCRIPTOR.message_types_by_name['GetImagesRequest'] = _GETIMAGESREQUEST
DESCRIPTOR.message_types_by_name['Image'] = _IMAGE
DESCRIPTOR.message_types_by_name['GetImagesResponse'] = _GETIMAGESRESPONSE
DESCRIPTOR.message_types_by_name['CreateInstanceRequest'] = _CREATEINSTANCEREQUEST
DESCRIPTOR.message_types_by_name['CreateInstanceResponse'] = _CREATEINSTANCERESPONSE
DESCRIPTOR.enum_types_by_name['InstanceStatus'] = _INSTANCESTATUS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GetInstancesRequest = _reflection.GeneratedProtocolMessageType('GetInstancesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETINSTANCESREQUEST,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetInstancesRequest)
  })
_sym_db.RegisterMessage(GetInstancesRequest)

Flavor = _reflection.GeneratedProtocolMessageType('Flavor', (_message.Message,), {
  'DESCRIPTOR' : _FLAVOR,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.Flavor)
  })
_sym_db.RegisterMessage(Flavor)

Instance = _reflection.GeneratedProtocolMessageType('Instance', (_message.Message,), {
  'DESCRIPTOR' : _INSTANCE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.Instance)
  })
_sym_db.RegisterMessage(Instance)

GetInstancesResponse = _reflection.GeneratedProtocolMessageType('GetInstancesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETINSTANCESRESPONSE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetInstancesResponse)
  })
_sym_db.RegisterMessage(GetInstancesResponse)

GetFlavorsRequest = _reflection.GeneratedProtocolMessageType('GetFlavorsRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFLAVORSREQUEST,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetFlavorsRequest)
  })
_sym_db.RegisterMessage(GetFlavorsRequest)

GetFlavorsResponse = _reflection.GeneratedProtocolMessageType('GetFlavorsResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFLAVORSRESPONSE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetFlavorsResponse)
  })
_sym_db.RegisterMessage(GetFlavorsResponse)

GetImagesRequest = _reflection.GeneratedProtocolMessageType('GetImagesRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETIMAGESREQUEST,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetImagesRequest)
  })
_sym_db.RegisterMessage(GetImagesRequest)

Image = _reflection.GeneratedProtocolMessageType('Image', (_message.Message,), {
  'DESCRIPTOR' : _IMAGE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.Image)
  })
_sym_db.RegisterMessage(Image)

GetImagesResponse = _reflection.GeneratedProtocolMessageType('GetImagesResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETIMAGESRESPONSE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.GetImagesResponse)
  })
_sym_db.RegisterMessage(GetImagesResponse)

CreateInstanceRequest = _reflection.GeneratedProtocolMessageType('CreateInstanceRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEINSTANCEREQUEST,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.CreateInstanceRequest)
  })
_sym_db.RegisterMessage(CreateInstanceRequest)

CreateInstanceResponse = _reflection.GeneratedProtocolMessageType('CreateInstanceResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEINSTANCERESPONSE,
  '__module__' : 'instance_pb2'
  # @@protoc_insertion_point(class_scope:instance.CreateInstanceResponse)
  })
_sym_db.RegisterMessage(CreateInstanceResponse)


DESCRIPTOR._options = None

_INSTANCESERVICE = _descriptor.ServiceDescriptor(
  name='InstanceService',
  full_name='instance.InstanceService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=823,
  serialized_end=1147,
  methods=[
  _descriptor.MethodDescriptor(
    name='GetInstances',
    full_name='instance.InstanceService.GetInstances',
    index=0,
    containing_service=None,
    input_type=_GETINSTANCESREQUEST,
    output_type=_GETINSTANCESRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetFlavors',
    full_name='instance.InstanceService.GetFlavors',
    index=1,
    containing_service=None,
    input_type=_GETFLAVORSREQUEST,
    output_type=_GETFLAVORSRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='GetImages',
    full_name='instance.InstanceService.GetImages',
    index=2,
    containing_service=None,
    input_type=_GETIMAGESREQUEST,
    output_type=_GETIMAGESRESPONSE,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='CreateInstance',
    full_name='instance.InstanceService.CreateInstance',
    index=3,
    containing_service=None,
    input_type=_CREATEINSTANCEREQUEST,
    output_type=_CREATEINSTANCERESPONSE,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_INSTANCESERVICE)

DESCRIPTOR.services_by_name['InstanceService'] = _INSTANCESERVICE

# @@protoc_insertion_point(module_scope)
