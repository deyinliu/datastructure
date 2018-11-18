#include "iostream"
using namespace std;
bool isPrinum(int n){
    if(n % 2 == 0) return false;
    for(int i = 3; i*i <= n; i = i+2){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
int main(){
    int n, flag;
    cin >> n;
    for(int i = 5; i <= n; i++){
        if(isPrinum(i-2) && isPrinum(i)){
            flag++;
        }
    }
    cout << flag << endl;
    return 0;
}