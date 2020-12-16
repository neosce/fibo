#include <node.h>

namespace fibonacci {

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::Number;
    using v8::Value;
    using v8::Array;

    int Fibonacci(int number)
    {
        if (number == 0)
            return 0;
        if (number == 1)
            return 1;
        return Fibonacci(number-1) + Fibonacci(number-2);
    }

    void Get(const FunctionCallbackInfo<Value>&args) {

        Isolate* isolate = args.GetIsolate();

        int length = 10;
        auto arrJs = Array::New(isolate, length);

        for(int i=0; i < length; i++) {
            arrJs->Set(i, Number::New(isolate, Fibonacci(i)));
        }

        args.GetReturnValue().Set(arrJs);

    }

    void Initialize(Local<Object> exports) {

        NODE_SET_METHOD(exports, "get", Get);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}
