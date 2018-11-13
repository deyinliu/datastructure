#include "iostream"
#include "string"
using namespace std;
void abc(int a , int b , int c){
    // string e = "throw an error";
    if (a<0 && b<0 && c<0) {
        throw "throw an error";
    }
    
    if (a==0 && b==0 && c==0) {
        throw "2";
    } 
}

int main(int argc, char const *argv[])
{
    char b[] = "hello world";
    cout<< b << endl;
    try{
        abc(-1 , -2 , -5);
    }
    catch(const char* e){
        string a = "hahah";
        cout<< e <<endl;
       cout<<"all parmeters less then 0"<<endl;
    }
    return 0;
}
