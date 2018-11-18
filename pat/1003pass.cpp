#include "iostream"
#include "string"

using namespace std;

void pass(int n , string arr[]){
    string temp;
    string p = "P",a="A",t="T";
    for(int i = 0; i < n; i++)
    {
        cin>>temp;
        bool fp=false,fa=false,ft=false;
        
        for(unsigned int j = 0; j < temp.length(); j++)
        {
            if(temp[j]==p[0]){
                fp = true;
            }
            if(temp[j]==a[0]){
                fa = true;
            }
            if(temp[j]==t[0]){
                ft = true;
            }
            if(fp && fa && ft){
                arr[i] = "YES";
                break;
            }else{
                arr[i] = "NO";
            }
        }
    }
    
}
int main(int argc, char const *argv[])
{
    int n;
    cin>>n;
    string arr[n];
    pass(n , arr);
    for(int i = 0; i < n; i++)
    {
        cout<<arr[i]<<endl;
    }
    
    return 0;
}

