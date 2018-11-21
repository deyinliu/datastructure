#include "iostream"
#include "stack"
using namespace std;
int main(){
    stack<string> a;
    string s;
    while(cin >> s){
        a.push(s);
    }
    cout << a.top();
    a.pop();
    while(!a.empty()){
        cout << " " << a.top();
        a.pop();
    }
    return 0;
}